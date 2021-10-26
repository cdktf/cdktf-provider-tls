// https://www.terraform.io/docs/providers/tls/r/cert_request.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of DNS names to use as subjects of the certificate
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request.html#dns_names CertRequest#dns_names}
  */
  readonly dnsNames?: string[];
  /**
  * List of IP addresses to use as subjects of the certificate
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request.html#ip_addresses CertRequest#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Name of the algorithm to use to generate the certificate's private key
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request.html#key_algorithm CertRequest#key_algorithm}
  */
  readonly keyAlgorithm: string;
  /**
  * PEM-encoded private key that the certificate will belong to
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request.html#private_key_pem CertRequest#private_key_pem}
  */
  readonly privateKeyPem: string;
  /**
  * List of URIs to use as subjects of the certificate
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request.html#uris CertRequest#uris}
  */
  readonly uris?: string[];
  /**
  * subject block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request.html#subject CertRequest#subject}
  */
  readonly subject: CertRequestSubject[];
}
export interface CertRequestSubject {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request.html#common_name CertRequest#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request.html#country CertRequest#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request.html#locality CertRequest#locality}
  */
  readonly locality?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request.html#organization CertRequest#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request.html#organizational_unit CertRequest#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request.html#postal_code CertRequest#postal_code}
  */
  readonly postalCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request.html#province CertRequest#province}
  */
  readonly province?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request.html#serial_number CertRequest#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request.html#street_address CertRequest#street_address}
  */
  readonly streetAddress?: string[];
}

function certRequestSubjectToTerraform(struct?: CertRequestSubject): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    country: cdktf.stringToTerraform(struct!.country),
    locality: cdktf.stringToTerraform(struct!.locality),
    organization: cdktf.stringToTerraform(struct!.organization),
    organizational_unit: cdktf.stringToTerraform(struct!.organizationalUnit),
    postal_code: cdktf.stringToTerraform(struct!.postalCode),
    province: cdktf.stringToTerraform(struct!.province),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    street_address: cdktf.listMapper(cdktf.stringToTerraform)(struct!.streetAddress),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/tls/r/cert_request.html tls_cert_request}
*/
export class CertRequest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "tls_cert_request";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tls/r/cert_request.html tls_cert_request} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertRequestConfig
  */
  public constructor(scope: Construct, id: string, config: CertRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'tls_cert_request',
      terraformGeneratorMetadata: {
        providerName: 'tls'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dnsNames = config.dnsNames;
    this._ipAddresses = config.ipAddresses;
    this._keyAlgorithm = config.keyAlgorithm;
    this._privateKeyPem = config.privateKeyPem;
    this._uris = config.uris;
    this._subject = config.subject;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert_request_pem - computed: true, optional: false, required: false
  public get certRequestPem() {
    return this.getStringAttribute('cert_request_pem');
  }

  // dns_names - computed: false, optional: true, required: false
  private _dnsNames?: string[] | undefined; 
  public get dnsNames() {
    return this.getListAttribute('dns_names');
  }
  public set dnsNames(value: string[] | undefined) {
    this._dnsNames = value;
  }
  public resetDnsNames() {
    this._dnsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNamesInput() {
    return this._dnsNames
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[] | undefined; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[] | undefined) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses
  }

  // key_algorithm - computed: false, optional: false, required: true
  private _keyAlgorithm?: string; 
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }
  public set keyAlgorithm(value: string) {
    this._keyAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAlgorithmInput() {
    return this._keyAlgorithm
  }

  // private_key_pem - computed: false, optional: false, required: true
  private _privateKeyPem?: string; 
  public get privateKeyPem() {
    return this.getStringAttribute('private_key_pem');
  }
  public set privateKeyPem(value: string) {
    this._privateKeyPem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPemInput() {
    return this._privateKeyPem
  }

  // uris - computed: false, optional: true, required: false
  private _uris?: string[] | undefined; 
  public get uris() {
    return this.getListAttribute('uris');
  }
  public set uris(value: string[] | undefined) {
    this._uris = value;
  }
  public resetUris() {
    this._uris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urisInput() {
    return this._uris
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: CertRequestSubject[]; 
  public get subject() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('subject') as any;
  }
  public set subject(value: CertRequestSubject[]) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_names: cdktf.listMapper(cdktf.stringToTerraform)(this._dnsNames),
      ip_addresses: cdktf.listMapper(cdktf.stringToTerraform)(this._ipAddresses),
      key_algorithm: cdktf.stringToTerraform(this._keyAlgorithm),
      private_key_pem: cdktf.stringToTerraform(this._privateKeyPem),
      uris: cdktf.listMapper(cdktf.stringToTerraform)(this._uris),
      subject: cdktf.listMapper(certRequestSubjectToTerraform)(this._subject),
    };
  }
}
