/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/data-sources/certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTlsCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The content of the certificate in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/data-sources/certificate#content DataTlsCertificate#content}
  */
  readonly content?: string;
  /**
  * URL of the endpoint to get the certificates from. Accepted schemes are: `https`, `tls`. For scheme `https://` it will use the HTTP protocol and apply the `proxy` configuration of the provider, if set. For scheme `tls://` it will instead use a secure TCP socket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/data-sources/certificate#url DataTlsCertificate#url}
  */
  readonly url?: string;
  /**
  * Whether to verify the certificate chain while parsing it or not (default: `true`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/data-sources/certificate#verify_chain DataTlsCertificate#verify_chain}
  */
  readonly verifyChain?: boolean | cdktf.IResolvable;
}
export interface DataTlsCertificateCertificates {
}

export function dataTlsCertificateCertificatesToTerraform(struct?: DataTlsCertificateCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataTlsCertificateCertificatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTlsCertificateCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTlsCertificateCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert_pem - computed: true, optional: false, required: false
  public get certPem() {
    return this.getStringAttribute('cert_pem');
  }

  // is_ca - computed: true, optional: false, required: false
  public get isCa() {
    return this.getBooleanAttribute('is_ca');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // not_after - computed: true, optional: false, required: false
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }

  // not_before - computed: true, optional: false, required: false
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }

  // public_key_algorithm - computed: true, optional: false, required: false
  public get publicKeyAlgorithm() {
    return this.getStringAttribute('public_key_algorithm');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // sha1_fingerprint - computed: true, optional: false, required: false
  public get sha1Fingerprint() {
    return this.getStringAttribute('sha1_fingerprint');
  }

  // signature_algorithm - computed: true, optional: false, required: false
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataTlsCertificateCertificatesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTlsCertificateCertificatesOutputReference {
    return new DataTlsCertificateCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/data-sources/certificate tls_certificate}
*/
export class DataTlsCertificate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tls_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTlsCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTlsCertificate to import
  * @param importFromId The id of the existing DataTlsCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/data-sources/certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTlsCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tls_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/data-sources/certificate tls_certificate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTlsCertificateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTlsCertificateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tls_certificate',
      terraformGeneratorMetadata: {
        providerName: 'tls',
        providerVersion: '4.0.4',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._content = config.content;
    this._url = config.url;
    this._verifyChain = config.verifyChain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificates - computed: true, optional: false, required: false
  private _certificates = new DataTlsCertificateCertificatesList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // verify_chain - computed: false, optional: true, required: false
  private _verifyChain?: boolean | cdktf.IResolvable; 
  public get verifyChain() {
    return this.getBooleanAttribute('verify_chain');
  }
  public set verifyChain(value: boolean | cdktf.IResolvable) {
    this._verifyChain = value;
  }
  public resetVerifyChain() {
    this._verifyChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyChainInput() {
    return this._verifyChain;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content: cdktf.stringToTerraform(this._content),
      url: cdktf.stringToTerraform(this._url),
      verify_chain: cdktf.booleanToTerraform(this._verifyChain),
    };
  }
}
