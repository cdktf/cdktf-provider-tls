// https://www.terraform.io/docs/providers/tls/r/cert_request
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of DNS names for which a certificate is being requested (i.e. certificate subjects).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#dns_names CertRequest#dns_names}
  */
  readonly dnsNames?: string[];
  /**
  * List of IP addresses for which a certificate is being requested (i.e. certificate subjects).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#ip_addresses CertRequest#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Name of the algorithm used when generating the private key provided in `private_key_pem`. **NOTE**: this is deprecated and ignored, as the key algorithm is now inferred from the key. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#key_algorithm CertRequest#key_algorithm}
  */
  readonly keyAlgorithm?: string;
  /**
  * Private key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format, that the certificate will belong to. This can be read from a separate file using the [`file`](https://www.terraform.io/language/functions/file) interpolation function. Only an irreversible secure hash of the private key will be stored in the Terraform state.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#private_key_pem CertRequest#private_key_pem}
  */
  readonly privateKeyPem: string;
  /**
  * List of URIs for which a certificate is being requested (i.e. certificate subjects).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#uris CertRequest#uris}
  */
  readonly uris?: string[];
  /**
  * subject block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#subject CertRequest#subject}
  */
  readonly subject: CertRequestSubject[] | cdktf.IResolvable;
}
export interface CertRequestSubject {
  /**
  * Distinguished name: `CN`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#common_name CertRequest#common_name}
  */
  readonly commonName?: string;
  /**
  * Distinguished name: `C`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#country CertRequest#country}
  */
  readonly country?: string;
  /**
  * Distinguished name: `L`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#locality CertRequest#locality}
  */
  readonly locality?: string;
  /**
  * Distinguished name: `O`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#organization CertRequest#organization}
  */
  readonly organization?: string;
  /**
  * Distinguished name: `OU`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#organizational_unit CertRequest#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Distinguished name: `PC`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#postal_code CertRequest#postal_code}
  */
  readonly postalCode?: string;
  /**
  * Distinguished name: `ST`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#province CertRequest#province}
  */
  readonly province?: string;
  /**
  * Distinguished name: `SERIALNUMBER`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#serial_number CertRequest#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Distinguished name: `STREET`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tls/r/cert_request#street_address CertRequest#street_address}
  */
  readonly streetAddress?: string[];
}

export function certRequestSubjectToTerraform(struct?: CertRequestSubject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
* Represents a {@link https://www.terraform.io/docs/providers/tls/r/cert_request tls_cert_request}
*/
export class CertRequest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tls_cert_request";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tls/r/cert_request tls_cert_request} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertRequestConfig
  */
  public constructor(scope: Construct, id: string, config: CertRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'tls_cert_request',
      terraformGeneratorMetadata: {
        providerName: 'tls',
        providerVersion: '3.2.0',
        providerVersionConstraint: '~> 3.1'
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
  private _dnsNames?: string[]; 
  public get dnsNames() {
    return this.getListAttribute('dns_names');
  }
  public set dnsNames(value: string[]) {
    this._dnsNames = value;
  }
  public resetDnsNames() {
    this._dnsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNamesInput() {
    return this._dnsNames;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // key_algorithm - computed: true, optional: true, required: false
  private _keyAlgorithm?: string; 
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }
  public set keyAlgorithm(value: string) {
    this._keyAlgorithm = value;
  }
  public resetKeyAlgorithm() {
    this._keyAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAlgorithmInput() {
    return this._keyAlgorithm;
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
    return this._privateKeyPem;
  }

  // uris - computed: false, optional: true, required: false
  private _uris?: string[]; 
  public get uris() {
    return this.getListAttribute('uris');
  }
  public set uris(value: string[]) {
    this._uris = value;
  }
  public resetUris() {
    this._uris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urisInput() {
    return this._uris;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: CertRequestSubject[] | cdktf.IResolvable; 
  public get subject() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('subject');
  }
  public set subject(value: CertRequestSubject[] | cdktf.IResolvable) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
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
