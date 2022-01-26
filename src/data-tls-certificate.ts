// https://www.terraform.io/docs/providers/tls/d/certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTlsCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/d/certificate#url DataTlsCertificate#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/d/certificate#verify_chain DataTlsCertificate#verify_chain}
  */
  readonly verifyChain?: boolean | cdktf.IResolvable;
}
export class DataTlsCertificateCertificates extends cdktf.ComplexComputedList {

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

/**
* Represents a {@link https://www.terraform.io/docs/providers/tls/d/certificate tls_certificate}
*/
export class DataTlsCertificate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "tls_certificate";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tls/d/certificate tls_certificate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTlsCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: DataTlsCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'tls_certificate',
      terraformGeneratorMetadata: {
        providerName: 'tls'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._url = config.url;
    this._verifyChain = config.verifyChain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificates - computed: true, optional: false, required: false
  public certificates(index: string) {
    return new DataTlsCertificateCertificates(this, 'certificates', index, false);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
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
      url: cdktf.stringToTerraform(this._url),
      verify_chain: cdktf.booleanToTerraform(this._verifyChain),
    };
  }
}
